import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({onSelectGenre}: Props) {
  const { data, isLoading, errors } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (errors) return null;

  return (
    <List>
      {isLoading &&
        skeleton.map((skeleton) => (
          <List key={skeleton}>
            <GenreListSkeleton />
          </List>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
