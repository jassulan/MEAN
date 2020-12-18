%-----------------------------------------------------------------------
% Job configuration created by cfg_util (rev $Rev: 4252 $)
%-----------------------------------------------------------------------
matlabbatch{1}.spm.spatial.coreg.estimate.ref = {'/autofs/cluster/pricelab/users/projects/GAAIN/Centiloid_GAAIN_data_spmedit_08222018/ProcessedImages/AD-100_MR/nifti/AD01_MR.nii,1'};
matlabbatch{1}.spm.spatial.coreg.estimate.source = {'/autofs/cluster/pricelab/users/projects/GAAIN/Centiloid_GAAIN_data_spmedit_08222018/ProcessedImages/AD-100_PET_5070/nifty/AD01_PiB_5070.nii,1'};
matlabbatch{1}.spm.spatial.coreg.estimate.other = {''};
matlabbatch{1}.spm.spatial.coreg.estimate.eoptions.cost_fun = 'nmi';
matlabbatch{1}.spm.spatial.coreg.estimate.eoptions.sep = [4 2];
matlabbatch{1}.spm.spatial.coreg.estimate.eoptions.tol = [0.02 0.02 0.02 0.001 0.001 0.001 0.01 0.01 0.01 0.001 0.001 0.001];
matlabbatch{1}.spm.spatial.coreg.estimate.eoptions.fwhm = [7 7];
