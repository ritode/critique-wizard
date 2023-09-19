import { Sphere, Html } from "@react-three/drei";
export default function CommentSphere({
  id,
  position,
  text,
  handleSave,
  handleDelete,
}) {
  return (
    <Sphere args={[0.1, 16, 16]} position={position}>
      <meshBasicMaterial attach="material" color="lightGreen" />
      <Html distanceFactor={10}>
        <textarea
          className="comment-text"
          value={text}
          onChange={(e) => handleSave(id, e.target.value)}
        />
        <button className="comment-del" onClick={() => handleDelete(id)}>
          ❌
        </button>
      </Html>
    </Sphere>
  );
}
