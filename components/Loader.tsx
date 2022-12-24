export default function Loader(props: { show: boolean }) {
  return props.show ? <div className="loader"></div> : null;
}