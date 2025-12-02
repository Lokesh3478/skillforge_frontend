import { useState } from "react";

export default function CommentsThread({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="p-4 rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        No comments yet.
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {comments.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
    </div>
  );
}

function Comment({ comment, depth = 0 }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={`flex flex-col ${depth > 0 ? "ml-6 border-l border-gray-300 dark:border-gray-700 pl-4" : ""}`}>
      
      {/* Comment content */}
      <div className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-sm">
        <p className="font-semibold dark:text-white">{comment.author}</p>
        <p className="text-gray-800 dark:text-gray-300">{comment.text}</p>
        {comment.replies && comment.replies.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="text-sm text-blue-500 mt-1 hover:underline"
          >
            {showReplies ? "Hide Replies" : `View Replies (${comment.replies.length})`}
          </button>
        )}
      </div>

      {/* Nested replies */}
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className="mt-2 space-y-2">
          {comment.replies.map((reply, i) => (
            <Comment key={i} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
