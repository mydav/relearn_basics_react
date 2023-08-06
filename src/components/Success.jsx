import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>All {count} invites has been sent.</p>
      <button className="send-invite-btn">Back</button>
    </div>
  );
};
