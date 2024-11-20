export const Footer = () => {
  return (
    <>
      <div className="absolute -z-50 w-full h-[13vh] left-[0] bottom-[0] bg-primary-light-green "></div>
      <footer className="w-full flex flex-row justify-between items-center -mb-[1.5em]">
        <div className="text-primary-dark-green w-[12em]">
          <h3 className="font-bold text-primary-dark-green">Samepy</h3>
          <p className="font-semibold text-primary-dark-green text-sm">Save money, energy and the Planet</p>
        </div>
        <p className="font-bold text-primary-dark-green w-[12em] text-center">&copy; {new Date().getFullYear()} Samepy - All Rights Reserved.</p>
        <div className="flex flex-col">
          <h3 className="font-bold text-primary-dark-green">Nossas Redes</h3>
          <div className="flex flex-row justify-center items-center gap-[1em]">
            <a
              href="https://github.com/ulipese/samepy-eco"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/Landing/githubIcon.svg"
                alt="Github Icon"
              />
            </a>
            <a
              href="https://instagram.com/samepy-eco"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/Landing/instagramIcon.svg"
                alt="Instagram Icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
