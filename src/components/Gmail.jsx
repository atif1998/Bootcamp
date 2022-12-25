import React from "react";
import { Link, Outlet } from "react-router-dom";

const Gmail = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ul>
              <li>
                <Link to="/gmail/inbox">Inbox</Link>
              </li>
              <li>
                <Link to="/gmail/outbox">Outvbox</Link>
              </li>
              <li>
                <Link to="/gmail/spam">Spam</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
