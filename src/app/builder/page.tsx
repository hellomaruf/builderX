"use client";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

export default function BuilderPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);
  const [previewItems, setPreviewItems] = useState([]);
  const previewRef = useRef(null);

  const palette = [
    { type: "Navbar", label: "Navbar" },
    { type: "Hero", label: "Hero" },
    { type: "Footer", label: "Footer" },
  ];

  function createInstance(type) {
    return {
      id: `${type}_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
      type,
    };
  }

  function onDragStartPalette(e, type) {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ from: "palette", type })
    );
    e.dataTransfer.effectAllowed = "copy";
  }

  function onDragStartPreviewItem(e, index) {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ from: "preview", index })
    );
    e.dataTransfer.effectAllowed = "move";
  }

  function onDragOverPreview(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }

  function onDropToPreview(e) {
    e.preventDefault();
    const raw = e.dataTransfer.getData("text/plain");
    if (!raw) return;
    let payload;
    try {
      payload = JSON.parse(raw);
    } catch (err) {
      return;
    }

    if (payload.from === "palette") {
      const inst = createInstance(payload.type);
      setPreviewItems((p) => [...p, inst]);
    }

    if (payload.from === "preview") {
      const sourceIndex = payload.index;
      setPreviewItems((items) => {
        const newItems = items.slice();
        const [moved] = newItems.splice(sourceIndex, 1);
        newItems.push(moved);
        return newItems;
      });
    }
  }

  function onDropToPreviewItem(e, targetIndex) {
    e.preventDefault();
    const raw = e.dataTransfer.getData("text/plain");
    if (!raw) return;
    let payload;
    try {
      payload = JSON.parse(raw);
    } catch (err) {
      return;
    }

    if (payload.from === "palette") {
      const inst = createInstance(payload.type);
      setPreviewItems((p) => {
        const newArr = p.slice();
        newArr.splice(targetIndex, 0, inst);
        return newArr;
      });
    }

    if (payload.from === "preview") {
      const sourceIndex = payload.index;
      setPreviewItems((items) => {
        const newItems = items.slice();
        if (sourceIndex < 0 || sourceIndex >= newItems.length) return newItems;
        const [moved] = newItems.splice(sourceIndex, 1);
        const insertIndex =
          sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
        newItems.splice(insertIndex, 0, moved);
        return newItems;
      });
    }
  }

  function onDragOverPreviewItem(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function removeItem(id) {
    setPreviewItems((p) => p.filter((it) => it.id !== id));
  }

  function renderComponentByType(type) {
    switch (type) {
      case "Navbar":
        return (
          <div className="w-full py-3 px-4 bg-white shadow-md rounded-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded" />
              <div className="font-semibold">BuilderX Navbar</div>
            </div>
            <div className="hidden md:flex gap-4 text-sm text-gray-600">
              <div>Home</div>
              <div>About</div>
              <div>Contact</div>
            </div>
          </div>
        );

      case "Hero":
        return (
          <div className="w-full rounded-md overflow-hidden shadow-lg">
            <div className="p-8 md:p-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                Hero Title
              </h1>
              <p className="max-w-xl">
                A short description of your hero section goes here. Drag more
                components to build the page.
              </p>
              <div className="mt-6 inline-block bg-white text-blue-600 font-medium px-4 py-2 rounded">
                Call to action
              </div>
            </div>
          </div>
        );

      case "Footer":
        return (
          <div className="w-full bg-gray-100 py-6 rounded-md">
            <div className="max-w-7xl mx-auto text-sm text-gray-700">
              © {new Date().getFullYear()} BuilderX. All rights reserved.
            </div>
          </div>
        );

      default:
        return <div>Unknown component: {type}</div>;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
        <aside className="col-span-12 md:col-span-3 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-3">Component Palette</h3>
          <div className="space-y-3">
            {palette.map((p) => (
              <div
                key={p.type}
                draggable
                onDragStart={(e) => onDragStartPalette(e, p.type)}
                className="cursor-grab select-none p-3 border border-dashed rounded hover:bg-slate-50"
              >
                {p.label}
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="font-medium mb-2">Preview JSON</h4>
            <pre className="text-xs bg-gray-100 p-2 rounded max-h-36 overflow-auto">
              {JSON.stringify(previewItems, null, 2)}
            </pre>
          </div>
        </aside>
        <main className="col-span-12 md:col-span-9">
          <div className="bg-white rounded shadow p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold">Live Preview</h3>
              <div className="text-sm text-gray-500">
                Drag from left and drop here
              </div>
            </div>
            <div
              ref={previewRef}
              onDragOver={onDragOverPreview}
              onDrop={onDropToPreview}
              className="min-h-[60vh] border-2 border-dashed border-gray-200 rounded p-4 bg-white"
            >
              {previewItems.length === 0 && (
                <div className="h-[60vh] flex items-center justify-center bg-gray-50 rounded text-gray-400">
                  Drop components here to build the page
                </div>
              )}
              <div className="space-y-4">
                {previewItems.map((item, idx) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => onDragStartPreviewItem(e, idx)}
                    onDragOver={onDragOverPreviewItem}
                    onDrop={(e) => onDropToPreviewItem(e, idx)}
                    className="relative p-2"
                  >
                    <div className="group border rounded p-3 bg-gray-50">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {renderComponentByType(item.type)}
                        </div>
                        <div className="ml-4 flex flex-col gap-2">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs border px-2 py-1 rounded text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  console.log("Export JSON", previewItems);
                  alert(
                    "Preview JSON logged to console (and shown in left panel)"
                  );
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Export JSON
              </button>
              <button
                onClick={() => setPreviewItems([])}
                className="px-4 py-2 border rounded"
              >
                Clear
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
