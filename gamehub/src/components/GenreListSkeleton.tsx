import {
  HStack,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
      <ListItem paddingY={3}>
      <HStack>
        <SkeletonCircle />
        <SkeletonText width="90px" />
      </HStack>
    </ListItem>
  );
}

export default GenreListSkeleton;
