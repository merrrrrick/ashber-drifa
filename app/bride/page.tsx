import AlbumPage from "@/components/AlbumPage";

const images = [
  "wedding/bride/001.jpg",
  "wedding/bride/002.jpg",
  "wedding/bride/003.jpg",
  "wedding/bride/004.jpg",
  "wedding/bride/005.jpg",
];

export default function BridePage() {
  return (
    <AlbumPage
      slug="bride"
      images={images}
    />
  );
}