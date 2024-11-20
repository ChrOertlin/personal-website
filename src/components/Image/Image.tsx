interface ImageSourceProp {
    ImageSource: string;
    alt?: string;
  }
  
  const ImageComponent: React.FC<ImageSourceProp> = ({ ImageSource, alt = "Image" }) => {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <img
          src={ImageSource}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };
  
  export default ImageComponent;