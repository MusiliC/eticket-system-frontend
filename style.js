const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",  
    heading2:
      "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph:
      "font-poppins font-normal text-dimWhite text-[13.5px] leading-[30.8px]",  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
   smallComponentContainer: `flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0`,
   userMainContainer:`w-5/6 mx-auto py-8`
  };

  export const buttons = {
    fullButton: `w-full text-white bg-secondary-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`,
  }
  
  export default styles;
  