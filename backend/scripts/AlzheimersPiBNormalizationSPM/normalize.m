% List of open inputs
% Normalise: Estimate & Write: Template Image - cfg_files
nrun = X; % enter the number of runs here
jobfile = {'./normalize_job.m'};
jobs = repmat(jobfile, 1, nrun);
inputs = cell(1, nrun);
for crun = 1:nrun
    inputs{1, crun} = MATLAB_CODE_TO_FILL_INPUT; % Normalise: Estimate & Write: Template Image - cfg_files
end
spm('defaults', 'PET');
spm_jobman('serial', jobs, '', inputs{:});
