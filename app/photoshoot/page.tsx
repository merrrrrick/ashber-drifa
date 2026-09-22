import AlbumPage from "@/components/AlbumPage";

const images = [
  "wedding/photoshoot/001.jpg",
  "wedding/photoshoot/002.jpg",
  "wedding/photoshoot/003.jpg",
  "wedding/photoshoot/004.jpg",
  "wedding/photoshoot/005.jpg",
];

export default function PhotoshootPage() {
  return (
    <AlbumPage
      slug="photoshoot"
      images={images}
    />
  );
}