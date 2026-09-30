import Image from "next/image";

export type PhotoData = { src: string; alt: string; position?: string };
export function Photo({ photo, className = "", priority = false }: { photo: PhotoData; className?: string; priority?: boolean }) {
 return <div className={`image-wrap relative ${className}`}><Image src={photo.src} alt={photo.alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" style={{ objectPosition: photo.position ?? "center" }} /></div>;
}
