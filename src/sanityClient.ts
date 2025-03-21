import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Definisikan tipe untuk client
export const client = createClient({
    projectId: "f6maqacz",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

// Buat URL untuk gambar
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
