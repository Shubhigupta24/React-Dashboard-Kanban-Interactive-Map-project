import React, { useState } from "react";
import {motion} from 'framer-motion'
import { fadeIn } from "../ultils/motion";
const Kanban = () => {
  const [newTask, setNewTask] = useState("");
  const [activeColumns, setActiveColumn] = useState("todo");
  const [draggedItem, setDraggedItem] = useState(null);

  const [columns, setColumns] = useState({
    todo: {
      name: "To Do",
      items: [
        { id: "1", content: "Market Research" },
        { id: "2", content: "Write Projects" },
      ],
    },
    inProgress: {
      name: "In Progress",
      items: [{ id: "3", content: "Design UI Mockups" }],
    },
    done: {
      name: "Done",
      items: [{ id: "4", content: "Set up repo" }],
    },
  });

  const addNewTask = () => {
    if (newTask.trim() === "") return;
    const updatedColumns = { ...columns };
    updatedColumns[activeColumns].items.push({
      id: Date.now().toString(),
      content: newTask,
    });
    setColumns(updatedColumns);
    setNewTask("");
  };

  const removeTask = (columnsId, taskId) => {
    const updatedColumns = { ...columns };
    updatedColumns[columnsId].items = updatedColumns[columnsId].items.filter(
      (item) => item.id !== taskId
    );
    setColumns(updatedColumns);
  };

  const handleDragStart = (columnsId, item) => {
    setDraggedItem({ columnsId, item });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();
    if (!draggedItem) return;
    const { columnsId: sourceColumnId, item } = draggedItem;
    if (sourceColumnId === columnId) return;
    const updatedColumns = { ...columns };
    updatedColumns[sourceColumnId].items = updatedColumns[
      sourceColumnId
    ].items.filter((i) => i.id !== item.id);
    updatedColumns[columnId].items.push(item);
    setColumns(updatedColumns);
    setDraggedItem(null);
  };

  const columnStyles = {
    todo: {
      header: "bg-gradient-to-r from-indigo-300 to-sky-300",
      border: "border-indigo-300",
    },
    inProgress: {
      header: "bg-gradient-to-r from-sky-300 to-pink-300",
      border: "border-sky-300",
    },
    done: {
      header: "bg-gradient-to-r from-pink-300 to-rose-300",
      border: "border-pink-300",
    },
  };

  return (
    <section
      id="kanban"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4  ml-16 md:ml-64 lg:ml-64 pt-30"
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-300/20 via-sky-300/20 to-pink-300/20 blur-3xl z-[-1]" />

      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6">
        <motion.h1 
         variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
        className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-indigo-400 via-sky-400 to-pink-400 text-transparent bg-clip-text text-center">
          Kanban Board
        </motion.h1>

        <motion.div 
         variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl shadow-lg rounded-lg">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-3 bg-gray-200 text-slate-800 focus:outline-none rounded-l-lg sm:rounded-none sm:rounded-l-lg w-full"
            onKeyDown={(e) => e.key === "Enter" && addNewTask()}
          />
          <select
            value={activeColumns}
            onChange={(e) => setActiveColumn(e.target.value)}
            className="p-3 bg-gray-200 text-slate-800 border-l border-gray-300 w-full sm:w-auto focus:outline-none"
          >
            {Object.keys(columns).map((columnsId) => (
              <option value={columnsId} key={columnsId}>
                {columns[columnsId].name}
              </option>
            ))}
          </select>
          <button
            onClick={addNewTask}
            className="px-6 py-3 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white font-medium hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 rounded-r-lg w-full sm:w-auto"
          >
            Add
          </button>
        </motion.div>

        <div className="flex flex-wrap gap-6 w-full justify-center items-start  pb-6">
          {Object.keys(columns).map((columnId) => (
            <motion.div
              key={columnId}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, columnId)}
               variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
              className={`flex-shrink-0 w-full  sm:w-72 md:w-80 bg-gray-200 rounded-lg shadow-xl border-t-4 ${columnStyles[columnId].border}`}
            >
              <div
                className={`p-4 text-white font-bold text-xl rounded-t-md ${columnStyles[columnId].header}`}
              >
                {columns[columnId].name}
                <span className="ml-2 px-2 py-1 bg-gray-200/30 rounded-full text-sm">
                  {columns[columnId].items.length}
                </span>
              </div>
              <div className="p-3 min-h-64">
                {columns[columnId].items.length === 0 ? (
                  <div className="text-center py-10 text-slate-800 italic text-sm">
                    Drop tasks here
                  </div>
                ) : (
                  columns[columnId].items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 mb-3 bg-gray-200 text-slate-800 rounded-lg shadow-md cursor-move flex items-center justify-between transform tranistion-all 
    duration-200 hover:scale-105 hover:shadow-lg"
                      draggable
                      onDragStart={() => handleDragStart(columnId, item)}
                    >
                      <span className="mr-2">{item.content}</span>
                      <button
                        onClick={() => removeTask(columnId, item.id)}
                        className="text-slate-800 hover:text-sky-700 transition-colors duration-200 w-6 h-6
        flex items-center justify-center rounded-full hover:bg-gray-100"
                      >
                        <span className="text-lg cursor-pointer">X</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kanban;
