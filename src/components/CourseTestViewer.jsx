import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function CourseTestViewer({ assessmentId }) {
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  console.log("Assessment ID:", assessmentId);
  useEffect(() => {
    const fetchAssessment = async () => {
      try {
        const res = await axiosClient.get(
          `/v1/assessments/${assessmentId}/questions?page=0&size=10`
        );
        setAssessment(res.data);
        setTimeLeft(res.data.durationInMinutes * 60); 
        console.log(res.data);
      } catch (err) {
        console.error("Failed to load assessment", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssessment();
  }, [assessmentId]);

  console.log("Assessment Data:", assessment);
  /* ---------------- Timer ---------------- */
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (loading) {
    return <div className="text-center">Loading assessment...</div>;
  }

  if (!assessment) {
    return <div className="text-center text-red-500">Assessment not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {assessment.type === "FINAL" ? "Final Assessment" : "Assessment"}
        </h2>

        <div className="bg-red-500 text-white px-4 py-1 rounded">
          ⏱ {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </div>
      </div>

      {/* Questions */}
      {assessment.questions.map((q, index) => (
        <div
          key={q.questionId}
          className="p-4 rounded border bg-white dark:bg-gray-900"
        >
          <p className="font-semibold mb-3">
            {index + 1}. {q.questionText}
          </p>

          <div className="space-y-2">
            {q.options.map((opt, i) => (
              <label
                key={i}
                className="block p-2 border rounded cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="radio"
                  name={q.questionId}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
