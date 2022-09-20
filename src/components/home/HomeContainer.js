import React from "react";
import LeftBar from "../LeftBar";
import Sidebar from "../Sidebar";

function HomeContainer() {
  return (
    <div>
      <div>
        <div className="flex">
          <Sidebar />
          <div className="w-720">
            <div>
              <div>
                <div className="leading-6 bg-gray-100 border-gray-200 border rounded-sm mt-1 py-4 px-60 pb-2">
                  <h1 className="text-center m-2 text-2xl">
                    Welcome to Nepang
                  </h1>
                  <p className="text-sm text-center">
                    A free learning app where each student can receive an
                    equitable education
                  </p>
                  <p className="text-sm text-center">
                    You can search for courses and topics in your grade and
                    beyond
                  </p>
                </div>
              </div>
              <div className="flex pt-3">
                <div>
                  <span>Your Feed</span>
                </div>
                <div className="ml-auto">
                  <span className="relative inline-block p-1 bg-green-200 hover:bg-green-400 font-normal text-center no-underline cursor-pointer m-0 rounded-md">
                    Ask Question
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <p>Grade 11</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex leading-6 gap-1">
                  <div className="bg-gray-100 border-gray-200 border rounded-sm p-0 px-2 pb-2">
                    <h1 className="text-center font-medium pt-2 ">
                      <span className="bg-green-200 px-48 border-gray-300 border rounded-sm">
                        Cheat Sheet
                      </span>
                    </h1>
                    <h2>Biology Definitions</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eum nihil cumque consequuntur impedit magnam repellat rem,
                      unde obcaecati corporis enim perspiciatis repellendus,
                      error quibusdam dicta eaque nobis at magni? Ut unde, quis
                      eaque fugiat aut dolorum veniam sunt dicta in quas alias!
                      Laudantium debitis reprehenderit, pariatur veniam eaque
                      corrupti ullam molestiae veritatis beatae dolor, non ut
                      aliquid voluptatum a atque dignissimos exercitationem
                      placeat laboriosam quos? Quo perspiciatis ipsum explicabo
                      voluptatum sed repellat laudantium pariatur harum et esse.
                      Voluptatibus corrupti nisi ullam tempore quos a, aut hic
                      cum maiores laudantium maxime enim alias tempora, iste
                      provident pariatur, illo nobis consequatur velit!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LeftBar />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
