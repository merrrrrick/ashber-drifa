import AlbumPage from "@/components/AlbumPage";

const images = [
  "wedding/nuptials/001.jpg",
  "wedding/nuptials/002.jpg",
  "wedding/nuptials/003.jpg",
  "wedding/nuptials/004.jpg",
  "wedding/nuptials/005.jpg",
];

export default function NuptialsPage() {
  return (
    <AlbumPage
      slug="nuptials"
      images={images}
    />
  );
}