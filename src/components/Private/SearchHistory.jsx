export default function SearchHistory({ isDarkMode }) {
  return (
    <>
      <section className="fixed right-0 w-[25%] hidden h-[calc(100vh-73px)] border-l-[1px] border-d-text border-opacity-20 xl:flex xl:justify-center p-4 ">
        <div className="rounded-lg dynamic-primary w-full py-3 px-4 border-[0.5px] border-d-text border-opacity-5 ">
          <p className="text-lg dynamic-text font-semibold ">History</p>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-40 my-2" />
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center hover:bg-l-secondary dark:hover:bg-d-secondary px-2 py-1 rounded-md cursor-pointer">
              <p className="font-medium dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur explicabo voluptatum dolores ea? Iusto dicta, tempora velit numquam commodi facere quo exercitationem voluptates expedita nostrum, aliquid pariatur magni
                ipsam recusandae!
              </p>
              <img src={`./icons/${isDarkMode ? "d-" : "l-"}close.svg`} alt="" />
            </div>
            <div className="flex flex-row justify-between items-center hover:bg-d-secondary px-2 py-1 rounded-md cursor-pointer">
              <p className="font-medium dynamic-text ">Rizal Nasi Goreng</p>
              <img src={`./icons/${isDarkMode ? "d-" : "l-"}close.svg`} alt="" />
            </div>
            <div className="flex flex-row justify-between items-center hover:bg-d-secondary px-2 py-1 rounded-md cursor-pointer">
              <p className="font-medium dynamic-text ">Richard Galon</p>
              <img src={`./icons/${isDarkMode ? "d-" : "l-"}close.svg`} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
