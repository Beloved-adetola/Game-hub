import platforms from "../data/platform";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  errors: null,
});

export default usePlatforms;
