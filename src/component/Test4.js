import React, { useState, useRef, useEffect, useCallback } from "react";

const Test4 = () => {
  const [image, setImage] = useState(null);
  const [rectangles, setRectangles] = useState([]);
  const [selectedRectangleIndex, setSelectedRectangleIndex] = useState(null);

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
    ctx.fillStyle = rect.color;
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
        color: "blue"
      }]);
      setSelectedRectangleIndex(rectangles.length);
    } else {
      setSelectedRectangleIndex(rectIndex);
    }
  }, [image, rectangles]);

  const handleCanvasMouseMove = useCallback((event) => {
    if (mouseDownRef.current && selectedRectangleIndex !== null) {
      const rect = rectangles[selectedRectangleIndex];
      const dx = event.nativeEvent.offsetX - mouseDownPointRef.current.x;
      const dy = event.nativeEvent.offsetY - mouseDownPointRef.current.y;
      rect.width = Math.max(Math.min(event.nativeEvent.offsetX, image.width) - rect.x, 0);
      rect.height = Math.max(Math.min(event.nativeEvent.offsetY, image.height) - rect.y, 0);

      setRectangles([...rectangles]);
    }
  }, [image, rectangles, selectedRectangleIndex]);

  const handleCanvasMouseUp = useCallback(() => {
    mouseDownRef
      .current = false;
  }, []);

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <canvas
          ref={canvasRef}
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
        />
      )}
    </div>
  );
};

export default Test4;