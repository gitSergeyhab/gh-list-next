"use client";

import { useEffect, useState } from "react";
import { postCountAction } from "../../fetchCount";
import { CountAction as ICountAction, Status } from "@/types";

export const CountAction = () => {
  const [action, setAction] = useState<ICountAction | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (action) {
      setStatus("loading");
      postCountAction(action)
        .then(() => {
          setStatus("success");
        })
        .catch(() => {
          setStatus("error");
        })
        .finally(() => {
          setAction(null);
        });
    }
  }, [action]);

  const onClickPlus = () => {
    setAction("increment");
  };
  const onClickMinus = () => {
    setAction("decrement");
  };
  const onClickReset = () => {
    setAction("reset");
  };

  return (
    <div className="counter-action">
      <button
        type="button"
        className="counter-action__btn"
        disabled={status === "loading"}
        onClick={onClickMinus}
      >
        -
      </button>
      <button
        className="counter-action__btn"
        disabled={status === "loading"}
        onClick={onClickReset}
      >
        reset
      </button>
      <button
        className="counter-action__btn"
        disabled={status === "loading"}
        onClick={onClickPlus}
      >
        +
      </button>
    </div>
  );
};
