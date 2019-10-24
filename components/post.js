import StyledLayout from './MyLayout

constructor(props) {
  super(props);
  this.state = {
    value: null,
  };
}

export default function About() {
  return (
    <div>
      <StyledLayout>
        <p>This is the about page</p>
      </StyledLayout>
      
    </div>
  );
}