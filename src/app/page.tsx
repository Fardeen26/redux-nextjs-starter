"use client"

import { decrement, increment } from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="flex items-center justify-center gap-4">
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}