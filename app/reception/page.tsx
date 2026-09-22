import AlbumPage from "@/components/AlbumPage";

const images = [
  "ashber-drifa/reception/HUS01249.jpg",
  "ashber-drifa/reception/HUS01246.jpg",
  "ashber-drifa/reception/HUS01235.jpg",
  "ashber-drifa/reception/HUS01258.jpg",
  "ashber-drifa/reception/HUS01259.jpg",
];

export default function ReceptionPage() {
  return (
    <AlbumPage
      slug="reception"
      images={images}
    />
  );
}