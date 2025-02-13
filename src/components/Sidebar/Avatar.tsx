interface AvatarProps {
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
}

export const Avatar = ({ displayName, photoURL, email }: AvatarProps) => {
  return (
    <div className="flex w-full gap-3 border-b border-b-[#E4E4E7] p-4">
      <picture className="min-h-10 min-w-10 overflow-hidden rounded-full">
        <img
          src={photoURL || ""}
          alt={`Foto de perfil de ${displayName}`}
          className="size-10 object-cover"
        />
      </picture>
      <div className="flex w-full flex-1 flex-col">
        <span className="text-sm font-medium">{displayName}</span>
        <span className="font-[#71717A] text-xs">{email}</span>
      </div>
    </div>
  );
};
