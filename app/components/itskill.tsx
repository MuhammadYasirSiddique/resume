import React from "react";

interface skillProp {
  percent: number;
  name: string;
  color: string;
}

const SkillLevel = ({ percent, name, color }: skillProp) => {
  const strokeWidth = 3;
  const radius = 60;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  const colorClass = `text-${color}-500`;
  const barClass = `stroke-${color}-500`;

  return (
    <div className="relative m-1">
      <svg height={radius * 2} width={radius * 2} className={colorClass}>
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          textAnchor="middle"
          x={radius}
          y={radius + 8}
          className="text-xl font-bold text-gray-700"
        >
          {name}
        </text>
      </svg>
      <br />

      <div className="absolute left-0 bottom-0 w-full h-2 bg-slate-200 rounded-full">
        <div
          className={`h-full ${barClass} rounded-full`}
          style={{ width: `${percent}%`, stroke: `${color}` }}
        />
      </div>
    </div>
  );
};

export default SkillLevel;
