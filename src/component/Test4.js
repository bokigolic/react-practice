import React, { useState, useRef, useEffect, useCallback } from "react";

const Test4 = () => {
  const [image, setImage] = useState(null);
  const [rectangles, setRectangles] = useState([]);
  const [selectedRectangleIndex, setSelectedRectangleIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState("blue"); // add state for selected color

  const canvasRef = useRef(null);
  const mouseDownRef = useRef(false);
  const mouseDownPointRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (image) {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      rectangles.forEach((rect) => {
        drawRectangle(ctx, rect);
      });
    }
  }, [image, rectangles]);

  const drawRectangle = (ctx, rect) => {
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = rect.color || selectedColor; // use selected color or default to rectangle color
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const handleImageChange = useCallback((event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      setImage(img);
      setRectangles([]);
      setSelectedRectangleIndex(null);
    };
    img.src = url;
  }, []);

  const handleCanvasMouseDown = useCallback((event) => {
    mouseDownRef.current = true;
    mouseDownPointRef.current = { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };

    if (event.nativeEvent.offsetX < 0 || event.nativeEvent.offsetX > image.width ||
      event.nativeEvent.offsetY < 0 || event.nativeEvent.offsetY > image.height) {
      mouseDownRef.current = false; // ignore clicks outside the image
      return;
    }

    const rectIndex = rectangles.findIndex((rect) => {
      return (
        event.nativeEvent.offsetX >= rect.x &&
        event.nativeEvent.offsetX <= rect.x + rect.width &&
        event.nativeEvent.offsetY >= rect.y &&
        event.nativeEvent.offsetY <= rect.y + rect.height
      );
    });

    if (rectIndex === -1) {
      setRectangles([...rectangles, {
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        width: 0,
        height: 0,
        color: selectedColor // set selected color for new rectangle
      }]);
      setSelectedRectangleIndex(rectangles.length);
    } else {
      setSelectedRectangleIndex(rectIndex);
      setSelectedColor(rectangles[rectIndex].color); // update selected color for clicked rectangle
    }
  }, [image, rectangles, selectedColor]);

  const handleCanvasMouseMove = useCallback((event) => {
    if (!mouseDownRef.current) return;
    if (selectedRectangleIndex === null) return;

    const rect = rectangles[selectedRectangleIndex];

    const width = event.nativeEvent.offsetX - mouseDownPointRef.current.x;
    const height = event.nativeEvent.offsetY - mouseDownPointRef.current.y;

    setRectangles([
      ...rectangles.slice(0, selectedRectangleIndex),
      { ...rect, width, height },
      ...rectangles.slice(selectedRectangleIndex + 1),
    ]);
  }, [rectangles, selectedRectangleIndex]);

  const handleCanvasMouseUp = useCallback(() => {
    mouseDownRef.current = false;
    mouseDownPointRef.current = null;
  }, []);

  const handleColorChange = useCallback((event) => {
    setSelectedColor(event.target.value);
  }, []);

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <br />
      <canvas
        ref={canvasRef}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
      />
      <br />
      <label>
        Select color:
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
      </label>
    </div>
  );
};

export default Test4;