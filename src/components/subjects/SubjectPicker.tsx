import { useId, useState } from "react";
import { EXAM_BOARDS, getSyllabusCode } from "../../data/syllabusConfig";
import { selectionKey } from "../../lib/userSyllabus";
import type { SubjectSyllabusSelection } from "../../lib/auth";

export function SubjectPicker({
  selections,
  onChange,
}: {
  selections: SubjectSyllabusSelection[];
  onChange: (selections: SubjectSyllabusSelection[]) => void;
}) {
  const id = useId();
  const [boardId, setBoardId] = useState("");
  const [search, setSearch] = useState("");
  const board = EXAM_BOARDS.find((item) => item.id === boardId);
  const subjects =
    board?.subjects.filter((subject) =>
      `${subject.name} ${getSyllabusCode(board.id, subject.id)}`
        .toLowerCase()
        .includes(search.trim().toLowerCase()),
    ) ?? [];
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={`${id}-board`} className="mb-2 block text-sm font-medium">
          Choose your exam board
        </label>
        <select
          id={`${id}-board`}
          value={boardId}
          onChange={(event) => setBoardId(event.target.value)}
          className="w-full rounded-xl border border-input bg-background p-3 text-sm"
        >
          <option value="">Select an exam board…</option>
          {EXAM_BOARDS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.qualification} · {item.name}
            </option>
          ))}
        </select>
      </div>
      {board && (
        <>
          <label className="block text-sm font-medium" htmlFor={`${id}-search`}>
            Search subjects
          </label>
          <input
            id={`${id}-search`}
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Subject name or syllabus code"
            className="w-full rounded-xl border border-input bg-background p-3 text-sm"
          />
          <div className="max-h-72 overflow-y-auto rounded-xl border border-border p-2">
            {subjects.map((subject) => {
              const selection = {
                subject: subject.id,
                examBoard: board.id,
                qualification: board.qualification,
              };
              const checked = selections.some(
                (item) => selectionKey(item) === selectionKey(selection),
              );
              return (
                <label
                  key={subject.id}
                  className="flex cursor-pointer items-start gap-3 rounded-lg p-3 hover:bg-secondary"
                >
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={checked}
                    onChange={() =>
                      onChange(
                        checked
                          ? selections.filter(
                              (item) => selectionKey(item) !== selectionKey(selection),
                            )
                          : [...selections, selection],
                      )
                    }
                  />
                  <span>
                    <span className="block text-sm font-medium">{subject.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {board.qualification} · {board.name} · {getSyllabusCode(board.id, subject.id)}
                    </span>
                  </span>
                </label>
              );
            })}
            {!subjects.length && (
              <p className="p-3 text-sm text-muted-foreground">
                No matching subjects. Try another search or exam board.
              </p>
            )}
          </div>
        </>
      )}
      <p className="text-xs text-muted-foreground">
        {selections.length} selected. You can change exam board to add subjects from another
        syllabus; your selections are kept.
      </p>
    </div>
  );
}
