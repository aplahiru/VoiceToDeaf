import tensorflow as tf

def transformer(filePath): 

  def decode_audio(audio_binary):
    audio, _ = tf.audio.decode_wav(audio_binary,desired_channels=1)
    return  tf.squeeze(audio, axis=-1)

  def get_waveform(file_path):
    audio_binary = tf.io.read_file(file_path)
    waveform = decode_audio(audio_binary)
    return waveform

  def get_spectrogram(waveform):
    zero_padding = tf.zeros([22050] - tf.shape(waveform), dtype=tf.float32)
    waveform = tf.cast(waveform, tf.float32)
    equal_length = tf.concat([waveform, zero_padding], 0)
    spectrogram = tf.signal.stft(
        equal_length, frame_length=255, frame_step=128)
    spectrogram = tf.abs(spectrogram)
    spectrogram = tf.expand_dims(spectrogram, -1)
    return spectrogram

  def preprocess_dataset(files):
    AUTOTUNE = tf.data.experimental.AUTOTUNE
    files_ds = tf.data.Dataset.from_tensor_slices(files)
    output_ds = files_ds.map(get_waveform, num_parallel_calls=AUTOTUNE)
    output_ds = output_ds.map(
        get_spectrogram,  num_parallel_calls=AUTOTUNE)
    return output_ds

  sample = preprocess_dataset([str(filePath)])

  for spectrogram in sample.batch(1):
    inputWAV_spectrogram = spectrogram

  return inputWAV_spectrogram