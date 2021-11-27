import ReactDOM from "react-dom";
function Clock(props) {
  return (
    <div>
      <h2>{props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 1000);

export default Clock;
