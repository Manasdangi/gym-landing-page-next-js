"use client";

import { useEffect, useState } from "react";

const PAGE_SIZE = 4;

export function MembersList() {
  const [members, setMembers] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadMembers() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(`/api/members?page=${page}&limit=${PAGE_SIZE}`);

        if (!response.ok) {
          throw new Error("Failed to load members");
        }

        const result = await response.json();

        if (isActive) {
          setMembers(result.data);
          setPagination(result.pagination);
        }
      } catch (err) {
        if (isActive) {
          setError(err.message);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadMembers();

    return () => {
      isActive = false;
    };
  }, [page]);

  return (
    <section className="members-panel">
      <div className="members-toolbar">
        <div>
          <p className="eyebrow">Member Directory</p>
          <h2>Current training members</h2>
        </div>

        {pagination ? (
          <span className="pagination-status">
            Page {pagination.page} of {pagination.totalPages}
          </span>
        ) : null}
      </div>

      {error ? <p className="api-message">{error}</p> : null}

      {isLoading ? (
        <p className="api-message">Loading members...</p>
      ) : (
        <div className="member-list">
          {members.map((member) => (
            <article className="member-card" key={member.id}>
              <div>
                <h3>{member.name}</h3>
                <p>{member.goal}</p>
              </div>
              <span>{member.plan}</span>
            </article>
          ))}
        </div>
      )}

      <div className="pagination-actions">
        <button
          type="button"
          className="secondary-button"
          disabled={isLoading || !pagination?.hasPreviousPage}
          onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
        >
          Previous
        </button>
        <button
          type="button"
          className="primary-button"
          disabled={isLoading || !pagination?.hasNextPage}
          onClick={() => setPage((currentPage) => currentPage + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}
