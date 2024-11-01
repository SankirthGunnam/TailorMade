import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { NativeSyntheticEvent, View } from "react-native";
import PagerView from "react-native-pager-view";

interface CarouselProps {
  items: ReactNode[];
  setCarouselItemIndex?: Dispatch<SetStateAction<number>>;
}

const Carousel: FC<CarouselProps> = ({ items, setCarouselItemIndex }) => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <View className="flex flex-1">
      <PagerView
        initialPage={pageIndex}
        onPageSelected={(event) => {
          setPageIndex(Number(event.nativeEvent.position));
          setCarouselItemIndex?.(Number(event.nativeEvent.position));
        }}
        style={{ flex: 1 }}
      >
        {items.map((item, index) => (
          <View key={index} className="flex flex-1 items-center justify-center">
            {item}
          </View>
        ))}
      </PagerView>
      {/* Pagination Dots */}
      <View className="flex w-full items-center justify-center">
        <View className="flex-row gap-x-2 mt-5">
          {Array.from({ length: items.length }).map((_, index) => (
            <View
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === pageIndex ? "bg-primary-gold" : "bg-accent-roseGold"
              }`}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Carousel;
