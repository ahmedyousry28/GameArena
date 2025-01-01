"use client";

import Empty from "@/components/defaults/Empty";
import GridContainer from "@/components/defaults/GridContainer";
import GameCard from "@/components/GameCard";
import GameSkeleton from "@/components/GameSkeleton";
import Heading from "@/components/Heading";
import { useWishlsit } from "@/context/wishlistContext";
import { useGetGamesWithIds } from "@/lib/queryFunctions";
import React from "react";

const page = () => {
  const { wishlist } = useWishlsit();
  const { games, isLoading } = useGetGamesWithIds(wishlist);
  return (
    <div className=" mt-10 flex flex-col gap-4">
      <Heading text="My WishList ❤️" />
      <GridContainer className="  gap-5 " cols={4}>
        {isLoading ? (
          <GameSkeleton />
        ) : games?.length && games?.length > 0 ? (
          games?.map((game: any, i) => (
            <GameCard
              key={i}
              wishlist={true}
              game={{
                ...game.data,
                short_screenshots: game.screenshots,
              }}
            />
          ))
        ) : (
          <Empty
            message="You have not added anything to your wishlist yet !"
            link="/games"
            linkText="Browse More Games"
          />
        )}
      </GridContainer>
    </div>
  );
};

export default page;
