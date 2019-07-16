import { get } from "idb-keyval";

interface StoredImage {
  buffer: ArrayBuffer;
  type: string;
}

export default async function blobImage(imageUrl: string) {
  const imageBlob = await get<StoredImage>(imageUrl);
  const imageSrc = URL.createObjectURL(
    new Blob([imageBlob.buffer], { type: imageBlob.type })
  );

  return imageSrc;
}
