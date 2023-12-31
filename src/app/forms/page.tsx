import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type Question = {
  type: "text";
};

const generateQuestion = (): Question => {
  return {
    type: "text",
  };
};

const renderQuestion = (props: Question) => {
  if (props.type === "text") {
    return <div>text</div>;
  }
  return null;
};

const Forms = () => {
  const questions = [generateQuestion()];
  return (
    <div className="m-24">
      <h1>Create form</h1>
      <div>
        <Button>Add question</Button>
      </div>
      {questions.map((elem) => {
        return renderQuestion(elem);
      })}
      <div className="my-12">
        <Input
          type="email"
          placeholder="Type the question"
          className="border-0 shadow-none focus-visible:ring-0 !focus:border-0 !active:border-0 text-lg font-semibold p-4"
        />
      </div>
      <div className="my-12">
        <Input
          type="email"
          placeholder="Type the question"
          className="border-0 shadow-none focus-visible:ring-0 leading-tight tracking-tighter lg:leading-[1.1] text-3xl  font-semibold p-4
          12"
        />
      </div>
    </div>
  );
};

export default Forms;
