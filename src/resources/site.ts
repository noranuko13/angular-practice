interface Site {
  header: Header;
}
interface Header {
  title: string;
}

const site: Site = {
  header: {
    title: 'Angular Practice'
  }
};
export default site;
