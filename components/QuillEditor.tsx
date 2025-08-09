"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function QuillEditor({ value, onChange }: Props) {
  return (
    <ReactQuill
      theme="snow"
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      }}
      className="max-w-md bg-white rounded-lg text-black"
      value={value}
      onChange={onChange}
    />
  );
}