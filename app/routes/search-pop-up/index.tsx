import type { Dispatch, SetStateAction, ChangeEvent } from "react";
import React, { useState, useEffect, useRef } from "react";
import usePreventScroll from "~/hooks/use-prevent-scroll";
import useDebounce from "~/hooks/use-debounce";
import type { PreviewItemType } from "../recomended-list";
import useOnClickOutside from "~/hooks/use-on-click-outside";
import {
  CloseButton,
  Container,
  Description,
  ImageContainer,
  Item,
  Overlay,
  ResultItems,
  Search,
  Arrow,
  Message,
  MobileMessage,
  MobileSearch,
  TextContainer,
} from "./search-pop-up.styled";

const placeholderText = "You can search for ‘Kyoukai no Kanata’ for example";
const mobilePlaceholderText = "Search for ‘Kyoukai no Kanata’ for example";

interface SearchPreviewType extends PreviewItemType {
  type: string;
  episodes: number;
  airing: boolean;
}

interface SearchPopUpProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface ResultType {
  data: SearchPreviewType[];
}

const SearchPopUp: React.FC<SearchPopUpProps> = ({ isOpen, setIsOpen }) => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState<SearchPreviewType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  usePreventScroll(isOpen);

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget?.value);
  };

  const debouncedSearch = useDebounce(searchValue, 200);

  useOnClickOutside(searchRef, () => setIsOpen(false));
  useEffect(() => {
    setIsLoading(true);
    if (debouncedSearch) {
      fetch(`https://api.jikan.moe/v4/anime?limit=5&letter=${debouncedSearch}`)
        .then((res) => res.json())
        .then((res: ResultType) => {
          setResult(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    } else {
      setResult([]);
      setIsLoading(false);
    }
  }, [debouncedSearch]);

  const isMessageDisplayed = !!debouncedSearch && !result?.length && !isLoading;

  const message = `Oops it seems there is nothing for ‘${debouncedSearch}’`;
  const mobileMessage = "Oops there is nothing for you request";

  const getEpisodesString = (episodes: number): string => {
    const single = `${episodes} Episodes`;
    const plural = `${single}s`;

    return episodes > 1 ? plural : single;
  };

  return (
    <Overlay $isOpen={isOpen}>
      <Container ref={searchRef}>
        <CloseButton type="button" onClick={handleClose} />
        <Search
          type="text"
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder={placeholderText}
        />
        <MobileSearch
          type="text"
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder={mobilePlaceholderText}
        />
        <ResultItems
          $isMessageDisplayed={isMessageDisplayed}
          $isOpen={!!debouncedSearch}
        >
          {isMessageDisplayed && (
            <>
              <Message>{message}</Message>
              <MobileMessage>{mobileMessage}</MobileMessage>
            </>
          )}
          {result?.map(({ mal_id, images, title, type, episodes, airing }) => (
            <Item to={`/${mal_id}`} key={mal_id}>
              <ImageContainer>
                <img src={images.webp.image_url} alt="preview" />
              </ImageContainer>
              <TextContainer>
                <p>{title}</p>
                <Description>
                  {type} &#183; {getEpisodesString(episodes)} &#183;{" "}
                  {airing ? "Airing" : "Complete"}
                </Description>
              </TextContainer>
              <Arrow fill="var(--secondaryLightMediumColor)" />
            </Item>
          ))}
        </ResultItems>
      </Container>
    </Overlay>
  );
};

export default SearchPopUp;
