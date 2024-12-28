import { Button } from "./Button";
import { Check, Trash } from "lucide-react";

export function Task({ completed, title, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="flex-1">
        <h3
          className={`font-medium ${
            completed ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={toggleTask}
          size="icon"
          variant={completed ? "primary" : "secondary"}
          rounded
        >
          {completed ? (
            <Check className="w-4 h-4" />
          ) : (
            <div className="w-4 h-4 text-transparent" />
          )}
        </Button>

        <Button onClick={deleteTask} size="icon" variant="destructive" rounded>
          <Trash className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
