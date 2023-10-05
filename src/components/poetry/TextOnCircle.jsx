export default function TextOnCircle({ title, rotate_title_text, rotate_container }) {
  return (
    <>
      <div className="w-[280px] h-[280px] relative flex justify-center" style={{rotate : `${rotate_container}deg`}}>
        {title.split("").map((el, index) => {
          return (
            <>
              <span
                className={
                  "h-[140px] w-[40px] transform absolute inline-block text-center origin-bottom rounded-full"
                }
                style={{rotate : `${index * rotate_title_text}deg`}}
              >
                {el}
              </span>
            </>
          );
        })}
      </div>
    </>
  );
}
