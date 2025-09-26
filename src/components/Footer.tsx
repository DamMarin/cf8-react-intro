const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <>
      <footer className="bg-cf-dark-gray text-white">
        <div className="container mx-auto py-8 text-center">
          @{currentYear} Coding Factory 8. All Rights Reserved.
        </div>
      </footer>
    </>
  )
}
export default Footer;