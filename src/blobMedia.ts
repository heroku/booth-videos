import { get } from "idb-keyval";

interface StoredMedia {
  buffer: ArrayBuffer;
  type: string;
}
export default async function blobMedia(url: string) {
  const blob = await get<StoredMedia>(url);
  return URL.createObjectURL(new Blob([blob.buffer], { type: blob.type }));
}
