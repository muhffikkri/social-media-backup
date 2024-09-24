export default function ModalBox({ showLogOut, setShowModalBox, modalAction }) {
  return (
    <>
      <section
        className="fixed top-0 left-0 w-full h-full bg-[rgba(214,215,216,0.7)] dark:bg-[rgba(214,215,216,0.2)] z-50 center cursor-pointer"
        onClick={() => {
          setShowModalBox(false);
        }}
      >
        <div
          className="w-[432px] flex flex-col dynamic-primary py-3 rounded-lg cursor-default"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {/* Head */}
          <div className="w-full flex justify-between border-b border-d-text border-opacity-30 pb-2 px-2">
            <p className="text-d-danger font-semibold text-lg flex-grow text-center">
              {modalAction === "log-out"
                ? "Ready to Log Out?"
                : "Delete Account?"}
            </p>
          </div>
          {/* End Head */}
          {/* Text Content */}
          <div className="w-full h-28 dynamic-text center text-base px-3">
            <p className="text-center">
              {modalAction === "log-out"
                ? "We’ll miss you! If you sign out now, you’ll need to log in again to access your account"
                : "By deleting your account, you will lose access to all your data. Are you sure you want to delete your account?"}
            </p>
          </div>
          {/* End Text Content */}
          {/* Button Confirmation */}
          <div className="w-full px-2 flex justify-end gap-2">
            <button
              className="w-1/4 bg-d-accent p-[2px] rounded-[4px] text-base font-medium dynamic-text text-shadow opacity-90 hover:opacity-100 hover:bg-[#177CFF]"
              onClick={() => {
                setShowModalBox(false);
              }}
            >
              Cancel
            </button>
            <button className="w-1/2 bg-d-danger p-[3px] rounded-[4px] text-base font-medium dynamic-text text-shadow opacity-90 hover:opacity-100 hover:bg-[#d32a2a]">
              {modalAction === "log-out"
                ? "Yes, Log me out!"
                : "Yes, Delete my account"}
            </button>
          </div>
          {/* End Button Confirmation */}
        </div>
      </section>
    </>
  );
}

// ! NOT READY YET
