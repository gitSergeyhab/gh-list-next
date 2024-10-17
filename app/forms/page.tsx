"use client";

import { useState } from "react";
import { Form } from "./form";
import { JsonText } from "@/shared/json-text";

export default function FormPage() {
  const [formData, setFormData] = useState<string>("");

  const onSubmit = (data: object) => {
    setFormData(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1 className="app__title">Dynamic Forms</h1>
      <Form onSubmit={onSubmit} />
      <JsonText>{formData}</JsonText>
    </div>
  );
}
