import * as React from 'react';

const SideBarHeaderButton = () => {
    return (
        <button className='side-bar-button p-0 me-4'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-1">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.11131 10.0557H7.94441C9.10808 10.0557 10.0557 
                9.10808 10.0557 7.94441V2.11131C10.0557 0.947633 9.10808 0 7.94441 0H2.11131C0.947633 0 0 0.947633 
                0 2.11131V7.9395C0 9.10808 0.947633 10.0557 2.11131 10.0557ZM1.20261 2.11119C1.20261 1.61037 1.61014
                1.20284 2.11096 1.20284H7.94406C8.44488 1.20284 8.85241 1.61037 8.85241 2.11119V7.93938C8.85241 
                8.4402 8.44488 8.84773 7.94406 8.84773H2.11096C1.61014 8.84773 1.20261 8.4402 1.20261 
                7.93938V2.11119Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0281 
                5.35197C17.0281 4.55654 16.3799 3.90842 15.5796 3.90842H12.3194C11.5239
                3.90842 10.8709 4.55654 10.8709 5.35197V8.61222C10.8709 9.40764 11.519 
                10.0607 12.3194 10.0607H15.5796C16.375 10.0607 17.0281 9.41255 17.0281 8.61222V5.35197ZM15.8251 
                8.60722C15.8251 8.73979 15.7171 8.85272 15.5796 8.85272H12.3193C12.1868 8.85272 12.0738 8.7447
                12.0738 8.60722V5.34697C12.0738 5.2144 12.1819 5.10638 12.3193 5.10638H15.5796C15.7122 5.10638 
                15.8251 5.2144 15.8251 5.34697V8.60722Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M23.9997 5.35197C23.9997 4.55654 23.3516 3.90842
                22.5562 3.90842H19.2959C18.5005 3.90842 17.8475 4.55654 17.8475 5.35197V8.61222C17.8475 9.40764
                18.4956 10.0607 19.2959 10.0607H22.5562C23.3516 10.0607 23.9997 9.41255 23.9997 8.61222V5.35197ZM22.7963
                8.60722C22.7963 8.73979 22.6882 8.85272 22.5557 8.85272H19.2954C19.1628 8.85272 19.0499 8.7447 19.0499 
                8.60722V5.34697C19.0499 5.2144 19.1579 5.10638 19.2954 5.10638H22.5557C22.6882 5.10638 22.7963 5.2144 
                22.7963 5.34697V8.60722Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0281 
                12.3241C17.0281 11.5287 16.3799 10.8806 15.5796 10.8806H12.3194C11.5239 10.8806 10.8709 11.5287 10.8709
                12.3241V15.5844C10.8709 16.3798 11.519 17.0328 12.3194 17.0328H15.5796C16.375 17.0328 17.0281 16.3847 
                17.0281 15.5844V12.3241ZM15.8251 15.5795C15.8251 15.712 15.7171 15.825 15.5796 15.825H12.3193C12.1868 
                15.825 12.0738 15.7169 12.0738 15.5795V12.3192C12.0738 12.1866 12.1819 12.0786 12.3193
                12.0786H15.5796C15.7122 12.0786 15.8251 12.1866 15.8251 12.3192V15.5795Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M23.9997 12.3241C23.9997 11.5287 23.3516 10.8806
                22.5562 10.8806H19.2959C18.5005 10.8806 17.8475 11.5287 17.8475 12.3241V15.5844C17.8475 16.3798
                18.4956 17.0328 19.2959 17.0328H22.5562C23.3516 17.0328 23.9997 16.3847 23.9997 15.5844V12.3241ZM22.7963
                15.5795C22.7963 15.712 22.6882 15.825 22.5557 15.825H19.2954C19.1628 15.825 19.0499 15.7169 19.0499
                15.5795V12.3192C19.0499 12.1866 19.1579 12.0786 19.2954 12.0786H22.5557C22.6882 12.0786 22.7963
                12.1866 22.7963 12.3192V15.5795Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.35214 10.8757C4.55672 10.8757
                3.90369 11.5239 3.90369 12.3193V15.5795C3.90369 16.375 4.55181 17.028 5.35214
                17.028H8.61239C9.40781 17.028 10.0608 16.3799 10.0608 15.5795V12.3193C10.0608 11.5239 9.41272 
                10.8757 8.61239 10.8757H5.35214ZM8.85272 12.3241V15.5843C8.85272 15.7169 8.7447 15.8298
                8.60722 15.8298H5.34697C5.2144 15.8298 5.10147 15.7218 5.10147 15.5843V12.3241C5.10147 12.1915
                5.20949 12.0835 5.34697 12.0835H8.60722C8.7447 12.0786 8.85272 12.1866 8.85272 
                12.3241Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.5796 17.8479H12.3194C11.5239 
                17.8479 10.8709 18.4961 10.8709 19.2964V22.5567C10.8709 23.3521 11.519 24.0002
                12.3194 24.0002H15.5796C16.375 24.0002 17.0281 23.3521 17.0281 22.5567V19.2964C17.0281 
                18.4961 16.3799 17.8479 15.5796 17.8479ZM15.8251 22.5566C15.8251 22.6892 15.7171 
                22.7972 15.5796 22.7972H12.3193C12.1868 22.7972 12.0738 22.6892 12.0738 
                22.5566V19.2963C12.0738 19.1638 12.1819 19.0508 12.3193 19.0508H15.5796C15.7122 19.0508 15.8251 
                19.1589 15.8251 19.2963V22.5566Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M22.5562 17.8479H19.2959C18.5005 17.8479 17.8475 
                18.4961 17.8475 19.2964V22.5567C17.8475 23.3521 18.4956 24.0002 19.2959 24.0002H22.5562C23.3516 
                24.0002 23.9997 23.3521 23.9997 22.5567V19.2964C23.9997 18.4961 23.3516 17.8479 22.5562 
                17.8479ZM22.7963 22.5566C22.7963 22.6892 22.6882 22.7972 22.5557 22.7972H19.2954C19.1628 
                22.7972 19.0499 22.6892 19.0499 22.5566V19.2963C19.0499 19.1638 19.1579 19.0508 19.2954 
                19.0508H22.5557C22.6882 19.0508 22.7963 19.1589 22.7963 19.2963V22.5566Z" fill="white">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.35214 24.0002H8.61239C9.40781 24.0002 
                10.0608 23.3521 10.0608 22.5567V19.2964C10.0608 18.501 9.41272 17.8479 8.61239 
                17.8479H5.35214C4.55672 17.8479 3.90369 18.4961 3.90369 19.2964V22.5567C3.90369 23.3521 
                4.55181 24.0002 5.35214 24.0002ZM5.10615 19.2963C5.10615 19.1638 5.21418 19.0508 5.35166 
                19.0508H8.61191C8.74448 19.0508 8.85741 19.1589 8.85741 19.2963V22.5566C8.85741 22.6892 
                8.74939 22.7972 8.61191 22.7972H5.35166C5.21909 22.7972 5.10615 22.6892 5.10615 
                22.5566V19.2963Z" fill="white">
                </path>
            </svg>
        </button>
    );
}
export default SideBarHeaderButton;