import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

    const cloudinaryConfig = {
        cloud: {
            cloudName: 'demo'
        }
    }

export const cldService = Cloudinary(cloudinaryConfig);