function Container() {
  return (
    <div class="bg-[#f0f0f0] h-screen flex items-center justify-center font-Poppins">
      <div class="bg-white w-[20rem] md:w-[27rem] h-[25rem] rounded-2xl rounded-br-[7rem] flex-row justify-between relative">
        <div class="h-2/6 border-b-2">
          <form
            class="flex justify-evenly md:justify-start md:ml-4 md:gap-4 h-full items-center"
            action=""
          >
            <input
              class="w-[5rem] h-1/3 border rounded-lg px-2"
              placeholder="DAY"
              type="text"
            />
            <input
              class="w-[5rem] h-1/3 border rounded-lg px-2"
              placeholder="MONTH"
              type="text"
            />
            <input
              class="w-[5rem] h-1/3 border rounded-lg px-2"
              placeholder="YEAR"
              type="text"
            />
          </form>
        </div>
        <div class="h-4/6  italic font-extrabold py-4 px-6 text-5xl flex flex-row flex-wrap">
          <span class="w-full h-1/4 mt-12">
            38 years <br />
          </span>
          <span class="w-full h-1/4">
            3 months <br />
          </span>
          <span class="w-full h-1/4">26 days </span>
        </div>
        <button class="absolute top-[8.25rem] left-1/2 md:left-[23rem] transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full text-white bg-[#854dff] hover:bg-[#141414] cursor-pointer text-center flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" stroke-width="3">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Container;
