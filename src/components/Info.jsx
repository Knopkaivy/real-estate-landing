import React from 'react';
import '../styles/Info.css';

const Info = () => {
  return (
    <div className="Info">
      <div className="Info__container container">
        <h2 className="Info__header">Home Information and Amenities</h2>
        <ul className="Info__amenities">
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="3.072"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    fill="var(--ci-primary-color, #000000)"
                    d="M448,242.025V152a48.055,48.055,0,0,0-48-48H112a48.055,48.055,0,0,0-48,48v90.025A64.115,64.115,0,0,0,16,304V416a32.036,32.036,0,0,0,32,32H64v48H96V448H416v48h32V448h16a32.036,32.036,0,0,0,32-32V304A64.115,64.115,0,0,0,448,242.025ZM112,416H48V304a32,32,0,0,1,64,0Zm256,0H144V320H368Zm2.025-128H141.975A64.243,64.243,0,0,0,96,242.025V152a16.019,16.019,0,0,1,16-16H400a16.019,16.019,0,0,1,16,16v90.025A64.243,64.243,0,0,0,370.025,288ZM464,416H400V304a32,32,0,0,1,64,0l.02,112Z"
                    class="ci-primary"
                  ></path>{' '}
                </g>
              </svg>
            </div>
            <p className="Info_amenitiesDescription">
              <span>1</span> Living Room
            </p>
          </li>
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <svg
                fill="#000000"
                width="64px"
                height="64px"
                viewBox="0 0 512 512"
                id="Layer_1"
                enable-background="new 0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g>
                    {' '}
                    <path d="m496 320c0-13.1 0-239.28 0-248 0-8.836-7.164-16-16-16s-16 7.164-16 16v16h-416v-16c0-8.836-7.164-16-16-16s-16 7.164-16 16v248c-8.836 0-16 7.164-16 16v104c0 8.836 7.164 16 16 16h40c5.036 0 9.778-2.371 12.8-6.4l19.2-25.6h336l19.2 25.6c3.021 4.029 7.764 6.4 12.8 6.4h40c8.836 0 16-7.164 16-16v-104c0-8.836-7.164-16-16-16zm-32-71.39c-17.206-9.979-30.797-8.61-48-8.61v-32c0-26.467-21.533-48-48-48h-80c-12.284 0-23.501 4.644-32 12.261-8.499-7.617-19.716-12.261-32-12.261h-80c-26.467 0-48 21.533-48 48v32c-17.989 0-30.887-1.315-48 8.61v-128.61h416zm-336-8.61v-32c0-8.822 7.178-16 16-16h80c8.822 0 16 7.178 16 16v32zm144-32c0-8.822 7.178-16 16-16h80c8.822 0 16 7.178 16 16v32h-112zm-224 96c0-17.645 14.355-32 32-32h352c17.645 0 32 14.355 32 32v16h-416zm432 120h-16l-19.2-25.6c-3.021-4.029-7.764-6.4-12.8-6.4h-352c-5.036 0-9.778 2.371-12.8 6.4l-19.2 25.6h-16v-72h448z"></path>{' '}
                  </g>{' '}
                </g>
              </svg>
            </div>
            <p className="Info_amenitiesDescription">
              <span>2</span> Bedrooms
            </p>
          </li>
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="64px"
                height="64px"
                viewBox="796 796 200 200"
                enable-background="new 796 796 200 200"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g>
                    {' '}
                    <path d="M989.164,888.038h-8.414H823.383V825.18c0-5.592,3.337-10.588,8.503-12.73c5.165-2.143,11.06-0.971,15.016,2.98 l0.194,0.186c0.111,0.103,0.239,0.176,0.357,0.27c-5.192,8.487-5.318,19.201-0.345,27.783c0.868,1.5,2.385,2.51,4.104,2.735 s3.444-0.363,4.669-1.588l29.526-29.527c1.225-1.225,1.811-2.95,1.586-4.667c-0.225-1.718-1.234-3.237-2.733-4.105 c-8.803-5.101-19.844-4.831-28.429,0.763c-0.117-0.14-0.214-0.29-0.344-0.421l-0.131-0.129c-7.438-7.337-18.457-9.493-28.117-5.486 c-9.713,4.026-15.989,13.422-15.989,23.937v62.857h-8.413c-3.35,0-6.066,2.716-6.066,6.066c0,3.349,2.716,6.065,6.066,6.065h8.413 v25.684c0,20.229,13.451,37.372,31.878,42.969l-13.569,13.572c-2.369,2.369-2.368,6.209,0.001,8.578 c1.185,1.184,2.736,1.775,4.289,1.775c1.552,0,3.105-0.592,4.289-1.776l20.214-20.217h76.402l20.215,20.217 c1.184,1.185,2.737,1.776,4.289,1.776s3.104-0.592,4.289-1.776c2.369-2.368,2.369-6.209,0-8.577l-13.838-13.84 c17.993-5.855,31.04-22.779,31.04-42.701v-25.684h8.414c3.351,0,6.066-2.716,6.066-6.065 C995.23,890.753,992.515,888.038,989.164,888.038z M968.618,925.852c0,18.069-14.7,32.77-32.77,32.77h-79.697 c-18.069,0-32.769-14.7-32.769-32.77v-22.924c0-1.522,1.235-2.759,2.759-2.759h139.718c1.523,0,2.759,1.236,2.759,2.759V925.852z"></path>{' '}
                    <path d="M875.431,839.156c1.065,0,2.117-0.431,2.857-1.187c0.755-0.741,1.187-1.792,1.187-2.857s-0.431-2.103-1.187-2.858 c-1.509-1.509-4.206-1.509-5.715,0c-0.754,0.755-1.187,1.793-1.187,2.858s0.432,2.117,1.187,2.857 C873.328,838.725,874.366,839.156,875.431,839.156z"></path>{' '}
                    <path d="M889.301,854.712c0.795,0.781,1.833,1.172,2.871,1.172c1.025,0,2.063-0.391,2.858-1.172c1.577-1.591,1.577-4.139,0-5.729 c-1.577-1.577-4.138-1.577-5.729,0C887.725,850.574,887.725,853.121,889.301,854.712z"></path>{' '}
                    <path d="M886.659,846.341c1.578-1.577,1.578-4.138,0-5.716c-1.577-1.59-4.138-1.59-5.715,0c-1.577,1.578-1.577,4.139,0,5.716 c0.796,0.782,1.82,1.187,2.858,1.187C884.839,847.527,885.877,847.123,886.659,846.341z"></path>{' '}
                    <path d="M896.486,860.212c0,1.064,0.432,2.103,1.187,2.858c0.754,0.754,1.791,1.186,2.856,1.186s2.116-0.432,2.857-1.186 c0.756-0.755,1.187-1.793,1.187-2.858c0-1.065-0.431-2.103-1.187-2.858c-1.494-1.51-4.205-1.51-5.714,0 C896.918,858.109,896.486,859.146,896.486,860.212z"></path>{' '}
                    <path d="M865.119,841.003c-0.742,0.755-1.173,1.793-1.173,2.858c0,1.064,0.432,2.103,1.173,2.857 c0.768,0.755,1.806,1.187,2.871,1.187c1.052,0,2.103-0.432,2.858-1.187c0.754-0.754,1.186-1.792,1.186-2.857 c0-1.065-0.431-2.103-1.186-2.858C869.351,839.493,866.629,839.493,865.119,841.003z"></path>{' '}
                    <path d="M870.982,858.406c0.377,0,0.741-0.054,1.119-0.162c2.143-0.607,3.383-2.844,2.776-5.001 c-0.62-2.144-2.858-3.384-5.001-2.764c-2.143,0.607-3.396,2.845-2.776,4.988C867.612,857.246,869.229,858.406,870.982,858.406z"></path>{' '}
                    <path d="M873.988,868.907c0.364,0,0.741-0.054,1.119-0.162c2.143-0.62,3.383-2.858,2.777-5.001 c-0.621-2.144-2.858-3.397-5.002-2.777c-2.156,0.62-3.397,2.857-2.776,5C870.619,867.747,872.236,868.907,873.988,868.907z"></path>{' '}
                    <path d="M876.995,879.394c1.064,0,2.103-0.431,2.858-1.187c0.754-0.741,1.186-1.792,1.186-2.857s-0.432-2.103-1.186-2.858 c-1.51-1.51-4.206-1.496-5.716,0c-0.755,0.755-1.186,1.793-1.186,2.858s0.431,2.116,1.186,2.857 C874.892,878.962,875.929,879.394,876.995,879.394z"></path>{' '}
                    <path d="M881.659,825.218c-0.755,0.741-1.187,1.793-1.187,2.858s0.431,2.103,1.187,2.857c0.754,0.754,1.792,1.187,2.857,1.187 s2.103-0.432,2.857-1.187c0.755-0.755,1.187-1.792,1.187-2.857s-0.432-2.117-1.187-2.858 C885.864,823.708,883.168,823.708,881.659,825.218z"></path>{' '}
                    <path d="M903.927,838.873c0.418,0.135,0.85,0.202,1.281,0.202c1.685,0,3.262-1.065,3.841-2.75c0.715-2.116-0.432-4.408-2.546-5.122 c-2.118-0.714-4.409,0.431-5.123,2.547C900.665,835.867,901.811,838.159,903.927,838.873z"></path>{' '}
                    <path d="M893.574,835.382c0.432,0.147,0.863,0.215,1.294,0.215c1.686,0,3.262-1.064,3.828-2.749 c0.716-2.117-0.432-4.422-2.547-5.123c-2.116-0.714-4.408,0.418-5.123,2.534C890.313,832.376,891.458,834.681,893.574,835.382z"></path>{' '}
                    <path d="M915.56,842.567c1.065,0,2.103-0.432,2.858-1.187c0.755-0.755,1.186-1.792,1.186-2.871c0-1.051-0.431-2.103-1.186-2.858 c-1.51-1.496-4.206-1.496-5.716,0c-0.755,0.755-1.187,1.808-1.187,2.858c0,1.065,0.432,2.116,1.187,2.871 C913.458,842.135,914.495,842.567,915.56,842.567z"></path>{' '}
                  </g>{' '}
                </g>
              </svg>
            </div>
            <p className="Info_amenitiesDescription">
              <span>2</span> Bathrooms
            </p>
          </li>
          <li className="Info__amenitiesItem">
            <div className="Info__amenitiesIcon">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    fill="var(--ci-primary-color, #000000)"
                    d="M448,255.454h-.511L407.067,164.5A48.044,48.044,0,0,0,363.2,136H148.8a48.043,48.043,0,0,0-43.863,28.5L64.511,255.454H64a32.036,32.036,0,0,0-32,32v112a32.036,32.036,0,0,0,32,32V472a24.028,24.028,0,0,0,24,24h56a24.028,24.028,0,0,0,24-24V431.454H344V472a24.028,24.028,0,0,0,24,24h56a24.028,24.028,0,0,0,24-24V431.454a32.036,32.036,0,0,0,32-32v-112A32.036,32.036,0,0,0,448,255.454ZM134.175,177.5A16.013,16.013,0,0,1,148.8,168H363.2a16.014,16.014,0,0,1,14.621,9.5l34.646,77.953H99.529ZM136,464H96V431.454h40Zm280,0H376V431.454h40Zm32-64.546H64v-112H448Z"
                    class="ci-primary"
                  ></path>{' '}
                  <rect
                    width="80"
                    height="32"
                    x="96"
                    y="328"
                    fill="var(--ci-primary-color, #000000)"
                    class="ci-primary"
                  ></rect>{' '}
                  <rect
                    width="80"
                    height="32"
                    x="336"
                    y="328"
                    fill="var(--ci-primary-color, #000000)"
                    class="ci-primary"
                  ></rect>{' '}
                  <polygon
                    fill="var(--ci-primary-color, #000000)"
                    points="256 14.758 16 111.121 16 145.604 256 49.242 496 145.604 496 111.121 256 14.758"
                    class="ci-primary"
                  ></polygon>{' '}
                </g>
              </svg>
            </div>
            <p className="Info_amenitiesDescription">
              <span>1 Car</span> Garage
            </p>
          </li>
        </ul>
        <div className="Info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
          voluptas, placeat facilis exercitationem cumque adipisci dicta
          tenetur, eaque deleniti et, accusantium debitis molestiae rem
          provident. A vel eum magni!
        </div>
        <button type="button" className="button-secondary">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Info;