import AlbumPage from "@/components/AlbumPage";

const images = [
  "wedding/groom/001.jpg",
  "wedding/groom/002.jpg",
  "wedding/groom/003.jpg",
  "wedding/groom/004.jpg",
  "wedding/groom/005.jpg",
];

export default function GroomPage() {
  return (
    <AlbumPage
      slug="groom"
      images={images}
    />
  );
}